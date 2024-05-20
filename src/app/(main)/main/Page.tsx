"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/app/hooks/useModal";
import { useRouter } from "next/navigation";
import MainCanvas from "./components/MainCanvas";

const Mainpage = () => {
  const router = useRouter();
  const { onOpen } = useModal();
  const onClickDetailModal = () => {
    onOpen("DetailModal");
  };

  return (
    <div className="min-w-[360px] w-full h-screen flex flex-col justify-center  items-center bg-[#0E1629]">
      <h2 className="text-[32px] font-bold text-white">차세대 3D 뷰어</h2>
      <MainCanvas />
      <div className="flex text-white gap-3">
        <Button className="p-[10px] rounded-full text-base w-[136px] h-[54px] bg-[rgba(255,255,255,0.1)]" onClick={() => router.push("/Interraction3D")}>
          3D 인터랙션
        </Button>
        <Button className="p-[10px] rounded-full text-base w-[136px] h-[54px] bg-[rgba(255,255,255,0.1)]" onClick={() => onClickDetailModal()}>
          유산 설명
        </Button>
      </div>
    </div>
  );
};

export default Mainpage;
