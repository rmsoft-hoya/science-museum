"use client";

import { useModal } from "@/app/hooks/useModal";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

const DetailModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "DetailModal";

  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent className="bg-[#152E64] flex h-full border-0 outline-none max-h-[684px] w-[326px] flex-col rounded-[16px] py-10 px-2 text-white">
        <div className="absolute top-[16px] right-[16px]">
          <X size={24} strokeWidth={2} className="cursor-pointer" onClick={() => onClose()} />
        </div>
        {/* 제목 */}
        <AlertDialogHeader className="flex">
          <div className="flex w-full items-center justify-center">
            <AlertDialogTitle className="text-2xl font-bold">측우기와 측우대</AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        {/* 내용 */}
        <div className="overflow-y-auto px-4 h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold">통영측우대(과학기술사-4-2019)</h2>
              <p className="leading-[140%] text-sm">
                측우대는 강우량을 측정하는 기기인 측우기를 안정되게 얹히기 위 한 받침돌로 윗면이 오목하게 파인 사각기둥 형태를 가지고 있다. 통영측우대는 19세기
                경남 통영에 위치한 수군 통제영에서 설치했 던 것으로 1910년경 관측소(현 기상청)로 옮겨서 보관되었다. 이후 1972년부터는 서울과학관에서, 그리고
                2008년부터는 국립중앙과 학관에서 전시되고 있다. 통영측우대는 현존하는 측우대 중 유일하게 받침대를 갖추고 있으 며, ‘測雨臺(측우대)’라는 명칭과
                ‘辛未 二月(신미 2월)’이라고 제작 연대가 명확하게 새겨져 있다. 이는 조선시대 전국 기상 관측망의 존재를 입증하는 중요한 증거로서, 우리나라가
                세계에서 가장 오랜 기간의 강우량 기록을 보유한 국가임을 확인하는 중요한 자료이다. 이러한 역사적 가치를 인정받아 2010년에 보물 제1652호로 지정되
                었다.
              </p>
            </div>
          </div>
        </div>
        {/* 푸터 */}
        <Button
          variant={"default"}
          className="mt-[22px] h-[54px] p-0 rounded-full flex justify-center items-center py-[20px] text-base"
          onClick={() => onClose()}
        >
          닫기
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DetailModal;
