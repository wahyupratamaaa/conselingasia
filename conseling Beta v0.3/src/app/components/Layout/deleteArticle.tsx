export const deleteArticle = async (id: number): Promise<void> => {
  if (!window.confirm("Are you sure you want to delete this article?")) {
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/article/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete article with id: ${id}`);
    }

    console.log(`Article with id: ${id} deleted successfully`);
  } catch (error) {
    // Pastikan error memiliki properti 'message' jika bertipe 'Error'
    if (error instanceof Error) {
      console.error("Error deleting article:", error.message);
    } else {
      console.error("Unknown error occurred while deleting article", error);
    }
    throw error;
  }
};
