"use client";

import { useEffect, useState } from "react";
import ProductDetailModal from "../(main)/main/components/DetailModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProductDetailModal />
    </>
  );
};
