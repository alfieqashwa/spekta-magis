"use client";

import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

export function ZoomableImage({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src.toString()}
          alt={alt || ""}
          sizes="100vw"
          priority
          className={cn("cursor-zoom-in", className)}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={300}
        />
      </DialogTrigger>
      <DialogContent className="z-[151] h-screen max-h-none max-w-none min-w-screen cursor-zoom-out border-0 bg-black p-0">
        <DialogTitle className="sr-only" />
        <DialogDescription className="sr-only" />
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            doubleClick={{ mode: "zoomIn" }}
            wheel={{ step: 0.1 }}
          >
            <TransformComponent>
              <Image
                src={src.toString()}
                alt={alt || ""}
                width={4096}
                height={800}
                priority
                style={{ width: "100%", height: "auto" }} // maintains aspect ratio
                className="object-contain"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
