import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validation = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validation.success) {
        const error = fromZodError(validation.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.message 
        });
      }

      const submission = await storage.createContactSubmission(validation.data);
      
      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        businessName: submission.businessName,
        platform: submission.platform,
        services: submission.services,
      });

      res.status(201).json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(500).json({ 
        error: "Failed to process contact submission" 
      });
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        error: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
