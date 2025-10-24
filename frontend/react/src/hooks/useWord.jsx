import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { fetchWords } from "../services";

const PATH = "/words";

export function useWord() {
  const queryClient = useQueryClient();

  const {
    data: words,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["words"],
    queryFn: () => fetchWords(),
  });

  const addWord = useMutation({
    mutationFn: () => api.post(`${PATH}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
    },
  });

  const editWord = useMutation({
    mutationFn: ({
      id,
      hebrew,
      pronunciation,
      association,
      translation,
      emoji,
      is_male,
      is_singular,
    }) =>
      api.put(`${PATH}/${id}`, null, {
        params: {
          hebrew: hebrew,
          pronunciation: pronunciation,
          association: association,
          translation: translation,
          emoji: emoji,
          is_male: is_male,
          is_singular: is_singular,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
    },
  });

  const deleteWord = useMutation({
    mutationFn: (id) => api.delete(`${PATH}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
    },
  });

  return {
    words,
    isLoading,
    error,
    addWord,
    editWord,
    deleteWord,
  };
}
