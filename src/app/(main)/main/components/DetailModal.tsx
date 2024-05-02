"use client";

import { useModal } from "@/app/hooks/useModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

const DetailModal = () => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "DetailModal";

  return (
    <Dialog open={isModalOpen} onOpenChange={onChange}>
      <DialogContent className="bg-[#152E64] opacity-90 overflow-y-auto flex h-full border-0 outline-none max-h-[684px] w-[326px] flex-col rounded-[16px] py-10 px-6 text-white">
        <div className="absolute top-[16px] right-[16px]">
          <X size={24} strokeWidth={2} className="cursor-pointer" onClick={() => onClose()} />
        </div>
        <DialogHeader className="mb-8 flex">
          <div className="flex w-full items-center justify-center">
            <DialogTitle className="text-2xl font-bold">측우대(測雨臺)</DialogTitle>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">정의</h2>
            <p className="leading-[140%] text-sm">조선 초기 광화방 관상감에 설치되었던 측우기를 놓았던 대석.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">개설</h2>
            <p className="leading-[140%] text-sm">
              1985년 보물로 지정되었다. 관상감 측우대는 측우기를 세웠던 화강암 대석(臺石)으로서 원래 서울 매동초등학교 교정의 한 구석에 있던 것을 1972년 11월
              8일국립중앙기상대(현재의 기상청)로 옮긴 것이다. 이 측우대는 세종대에 측우기(測雨器)를 제작할 때에 함께 만들어졌을 가능성이 매우 크며, 이후 북부
              광화방관상감에서 측우기를 설치하였던 대석일 것으로 추정된다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">내용</h2>
            <p className="leading-[140%] text-sm">
              관상감 측우대는 높이 87.6㎝, 두께 59.7㎝, 너비 94.5㎝의 화강암 석대로서 위쪽 면의 가운데에는 직경 16.5㎝, 깊이 4.7㎝의 구멍이 뚫려 있다. 전상운의
              연구에 의해 측우대로 고증된 유물이다. 이 측우대는 애초 서울 매동초등학교의 교정 한 구석에 있었는데, 매동초등학교는 1934년까지 경복궁내
              대루원(待漏院) 금부직방(禁府直房) 터에 위치하였다. 이곳은 고종 초에 경복궁을 재건한 이후 북부 광화방(廣化坊)에 있던 관상감이 이전하여 자리하였던
              곳이다. 이후 학교를 지금의 자리로 이전할 때에 교정에 있던 측우대 유물도 함께 가져왔다고 전한다. 이를 통해 이 측우기 대석이 원래 관상감이 북부
              광화방 자리에 있을 때부터 측우기를 설치하여 사용하였던 대석이었고, 고종대에 경복궁을 재건한 이후에 경복궁으로 옮겨 놓았음을 알 수 있다. 광화방
              관상감 터는 조선 초기 관상감이 설치된 이후부터 줄곧 관상감이 자리잡았던 곳이다. 따라서 이 측우대는 세종대 측우기를 만든 이후부터 대석으로 사용한
              것으로, 현존하는 가장 오래된 측우대이다. 측우대 위에 있던 원래의 측우기는 전란 등에 의해 유실된 것으로 보인다.
            </p>
          </div>
        </div>
        <Button className="bg-[#112651] mt-[22px] rounded-full flex justify-center items-center p-[10px] text-xl" onClick={() => onClose()}>
          닫기
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
