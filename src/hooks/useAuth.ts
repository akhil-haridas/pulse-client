import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile, login as loginApi, logout as logoutApi } from "@api/auth";

export const useAuth = () => {
    const queryClient = useQueryClient();

    const { data: user, isLoading, isError } = useQuery({
        queryKey: ["me"],
        queryFn: getProfile,
        retry: false, // don't retry if unauthenticated
    });

    const login = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });

    const logout = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["me"] });
        },
    });

    return {
        user,
        isLoading,
        isError,
        login: login.mutateAsync,
        logout: logout.mutateAsync,
    };
};
