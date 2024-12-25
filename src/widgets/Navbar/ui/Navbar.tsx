import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [t] = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);

  const onShowModal = useCallback(()=> setIsAuthModal(true), []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
