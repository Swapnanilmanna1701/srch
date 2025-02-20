"use client";

import * as React from "react";
import CazzButton from "@/components/cazz"
import Image from "next/image";
import { X } from "lucide-react";
import CrossButton from "@/components/cross"
import DownloadButton from "@/components/downloadbutton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as htmlToImage from "html-to-image";

interface ImageModalProps {
  image: {
    url: string;
    description: string;
  } | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  const handleDownload = () => {
    // Actually download the image using a module named html-to-image
    const node = document.getElementById("CazzAI-Image");
    if (node) {
      htmlToImage.toPng(node).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "CazzAI-Image.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  if (!image) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose} >
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black">
        <div className="relative h-full flex flex-col">
          <DialogHeader className="p-6 text-left bg-black backdrop-blur-sm z-10">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl text-left font-semibold">
                  <CazzButton />
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-muted-foreground mt-1 text-white">
                  {image.description}
                </DialogDescription>
              </div>
              <button
                
                
                onClick={onClose}
                
              >
                <CrossButton />
              </button>
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-auto">
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt=""
                width={1000}
                height={1000}
                className="object-contain max-h-96"
                id="CazzAI-Image"
              />
            </div>
          </div>
          <div className="p-6 bg-black backdrop-blur-sm">
            <button onClick={handleDownload} className="w-full sm:w-auto">
              <DownloadButton />
              
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
