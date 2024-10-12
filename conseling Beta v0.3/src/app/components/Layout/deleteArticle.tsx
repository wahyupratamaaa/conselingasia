// export const deleteArticle = async (id: number): Promise<void> => {
//   // Menampilkan alert konfirmasi dan menghentikan proses jika pengguna memilih "Cancel"
//   const isConfirmed = window.confirm("Are you sure you want to delete this article?");
  
//   if (!isConfirmed) {
//     console.log("Article deletion cancelled by user.");
//     return; // Tidak ada tindakan lebih lanjut
//   }

//   try {
//     const response = await fetch(`http://localhost:5000/api/article/${id}`, {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to delete article with id: ${id}`);
//     }

//     console.log(`Article with id: ${id} deleted successfully`);
//   } catch (error) {
//     // Pastikan error memiliki properti 'message' jika bertipe 'Error'
//     if (error instanceof Error) {
//       console.error("Error deleting article:", error.message);
//     } else {
//       console.error("Unknown error occurred while deleting article", error);
//     }
//     throw error;
//   }
// };

export const deleteArticle = async (id: number): Promise<void> => {
  // Menampilkan alert konfirmasi dan menghentikan proses jika pengguna memilih "Cancel"
  const isConfirmed = window.confirm("Are you sure you want to delete this article?");
  
  if (!isConfirmed) {
    console.log("Article deletion cancelled by user.");
    window.location.reload();
    return; // Menghentikan eksekusi jika pengguna membatalkan
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
