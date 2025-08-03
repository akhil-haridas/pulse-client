import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile, login, logout, register } from "@api";

const queryKey = ["authUser"];

export const useAuth = () => {
    const queryClient = useQueryClient();

    const {
        data: user,
        isLoading,
        isError,
        error,
        refetch,
        isFetched,
    } = useQuery({
        queryKey,
        queryFn: async () => (await getProfile()).data.user,
        retry: false,
    });

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    const registerMutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    const logoutMutation = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey });
        },
    });

    return {
        user,
        isLoading,
        isError,
        error,
        isFetched,
        login: loginMutation.mutateAsync,
        register: registerMutation.mutateAsync,
        logout: logoutMutation.mutateAsync,
        refetchUser: refetch,
    };
};
