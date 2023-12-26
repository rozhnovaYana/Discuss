"use server";
interface CreatePostState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string;
  };
}
export const createPost = async (
  prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> => {
  return {
    errors: {},
  };
};
