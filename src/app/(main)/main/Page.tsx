"use client";

import React from "react";
import CanvasPage from "../siba/siba";
import { Button } from "@/components/ui/button";
import { useModal } from "@/app/hooks/useModal";

const Mainpage = () => {
  const { onOpen } = useModal();
  const onClickDetailModal = () => {
    onOpen("DetailModal");
  };

  return (
    <div className="min-w-[360px] w-full h-screen flex flex-col justify-center gap-[110px] items-center bg-[#0E1629]">
      <h2 className="text-[32px] font-bold text-white">측우대(測雨臺)</h2>
      <CanvasPage />
      <div className="flex text-white gap-3">
        <Button className="p-[10px] rounded-full text-base w-[136px] h-54px bg-[rgba(255,255,255,0.1)]">3D</Button>
        <Button className="p-[10px] rounded-full text-base w-[136px] h-54px bg-[rgba(255,255,255,0.1)]" onClick={() => onClickDetailModal()}>
          설명 보기
        </Button>
      </div>
    </div>
  );
};

export default Mainpage;
