import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getProfile,
    login as loginRequest,
    logout as logoutRequest,
} from "@api";

export const useAuth = () => {
    const queryClient = useQueryClient();

    const {
        data: user,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["me"],
        queryFn: getProfile,
        retry: false,
    });

    const login = useMutation({
        mutationFn: loginRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });

    const logout = useMutation({
        mutationFn: logoutRequest,
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
