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
    <div className="min-w-[360px] w-full h-screen flex flex-col justify-center  items-center bg-[#0E1629] py-10">
      <h2 className="text-[32px] font-bold text-white">측우기와 측우대</h2>
      <MainCanvas />
      <div className="flex text-white gap-3">
        <Button className="p-[10px] rounded-full text-base w-[136px] h-54px bg-[rgba(255,255,255,0.1)]" onClick={() => router.push("/Interraction3D")}>
          3D 인터렉션
        </Button>
        <Button className="p-[10px] rounded-full text-base w-[136px] h-54px bg-[rgba(255,255,255,0.1)]" onClick={() => onClickDetailModal()}>
          설명 보기
        </Button>
      </div>
    </div>
  );
};

export default Mainpage;
