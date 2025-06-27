import { useState } from "react";

const useHomeController = () => {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
};

export default useHomeController;
