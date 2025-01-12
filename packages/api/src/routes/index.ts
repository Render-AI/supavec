import { Router } from "express";
import type { IRouter } from "express";
import { uploadFile } from "../controllers/upload-file";
import { uploadText } from "../controllers/upload-text";
import { getEmbeddings } from "../controllers/embeddings";
import { userFiles } from "../controllers/user-files";
import { deleteFiles } from "../controllers/delete-files";
import { upload } from "../middleware/upload";
import { apiKeyAuth } from "../middleware/auth";
import { validateRequestMiddleware } from "../middleware/delete-files/validate-request";

export const router: IRouter = Router();

router.post("/upload_file", apiKeyAuth(), upload.single("file"), uploadFile);
router.post("/upload_text", apiKeyAuth(), uploadText);
router.post("/embeddings", apiKeyAuth(), getEmbeddings);
router.post("/user_files", apiKeyAuth(), userFiles);
router.post(
  "/delete_files",
  apiKeyAuth(),
  validateRequestMiddleware(),
  deleteFiles,
);
