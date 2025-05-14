export type Theme = "dark" | "light" | "system";

export type AboutProps = {
    isOpen: boolean;
    onClose: () => void;
  };

export type LayoutProps = {
    children: React.ReactNode;
}

export type HeaderProps = {
    onOpen: () => void;
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
};