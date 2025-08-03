import { useAuth } from "@hooks";

export const useIsAuthenticated = () => {
    const { user, isLoading } = useAuth();
    return { isAuthenticated: !!user, isLoading };
};
