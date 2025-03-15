export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  error?: string;
}

export const submitForm = async (formData: FormData): Promise<SubmissionResponse> => {
  try {
    const response = await fetch("https://formspree.io/f/mldekqgd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
      console.error("Form submission error:", error); // Log the error to use the variable
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
    };
  }
}; 
