"use client";

import { useModal } from "@/app/hooks/useModal";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React from "react";

const DetailModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "DetailModal";

  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent className="bg-[#152E64] flex h-full border-0 outline-none max-h-[684px] w-[326px] flex-col rounded-[16px] py-10 px-2 text-white">
        {/* 제목 */}
        <AlertDialogHeader className="flex">
          <div className="flex w-full items-center justify-center">
            <AlertDialogTitle className="text-xl font-bold">측우기(測雨器)와 측우대(測雨臺)</AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        {/* 내용 */}
        <div className="overflow-y-auto px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold">개요</h2>
              <p className="leading-[140%] text-sm">
                측우기는 1441년(세종 23년)에 왕세자였던 문종에 의해 발명된 조선 시대 우량 측정기구이다. 이 측우기의 받침대가 측우대이다. 15세기 비의 양을
                인공적인 기구를 이용하여 정밀한 수치로 측정한 것은 세계 과학사에 획기적인 일이었다.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold">설명</h2>
              <p className="leading-[140%] text-sm indent-3">
                조선은 농업국가로, 농업생산량의 증산에 필요한 농업용수 확보를 위해 강우량 측정이 중요하였다. 그러나 강우량 측정기구가 없어 비 온 뒤 땅에 비가
                스며든 깊이를 측정했으나 땅이 빗물에 스며든 깊이는 토양의 습도에 따라 달라지므로 빗물의 양을 정확히 알기 어려웠다.
              </p>
              <p className="leading-[140%] text-sm indent-3">
                이에 세종실록에 의하면 문종은 왕세자 시절에 강우량 측정법을 연구하여 세계 최초 강우량계인 측우기를 발명하였다. 측우기는 주철로 된 원통형
                그릇으로, 높이 1척 5촌(약 32cm), 지름 7촌(약 15cm)이며, 돌로 만든 측우대 위에 올려놓고 비가 그친 후 주척(周尺)을 써서 푼(分)단위까지 재고, 비가
                내리기 시작 한 시간과 그친 시간을 측정하도록 하였다.
              </p>
              <p className="leading-[140%] text-sm indent-3">
                현존하는 측우기는 1837년 공주 충청감영에 설치되었던 금영 측우기가 유일하며, 측우대는 대구 경상감영 측우대, 창덕궁 이문원 측우대, 관상감 측우대,
                통영 측우대 등 4기만 남아 있다.
              </p>
              <p className="leading-[140%] text-sm indent-3">
                그 중 통영 측우대(보물)는 현존하는 측우대 중 유일하게 받침대를 갖추고 있으며, ‘測雨臺(측우대)’와 ‘辛未二月(신미 2월)’이라는 명문이 있어 명칭과
                제작 연대도 알 수 있다.
              </p>
              <p className="leading-[140%] text-sm indent-3">
                측우기와 측우대는 조선 시대 기상 관측을 입증하는 중요한 증거로, 우리나라가 세계에서 가장 오랜 기간 강우량 측정 및 기록을 보유한 국가임을 알 수
                있는 중요한 자료이다.
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
