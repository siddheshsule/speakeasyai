"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size < 20 * 1024 * 1024, // Fixed size validation (20MB)
      "File size must not exceed 20MB"
    )
    .refine(
      (file) =>
        file.type.startsWith("audio/") || file.type.startsWith("video/"),
      "File must be an audio or a video file"
    ),
});

export default function UploadForm() {
  const { toast } = useToast();
  const { startUpload } = useUploadThing("videoOrAudioUploader", {
    onClientUploadComplete: () => {
      toast({title: "Uploaded successfully!"});
    },
    onUploadError: (err) => {
      console.error("Error occured",err);
    },
    onUploadBegin: () => {
      toast({title:"Upload has begun!"});
    },
  });

  const handleTranscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
      // Show error toast if validation fails
      toast({
        title: "Something went wrong!",
        variant: "destructive",
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      });
      return;
    }

    // Upload the file using startUpload
    try {
      const result = await startUpload([file]);
      toast({
        title: "Upload successful🤘!",
        description: "Your file has been uploaded.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        variant: "destructive",
        description: "There was an error uploading the file.",
      });
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleTranscribe}>
      <div className="flex justify-end items-center gap-1.5">
        <Input id="file" name="file" type="file" accept="audio/*, video/*" required />
        <Button type="submit" className="bg-purple-600">
          Transcribe
        </Button>
      </div>
    </form>
  );
};


