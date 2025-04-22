import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

// Esto sería parte de un Servlet o un controlador en un framework web
public class ContactoDAO { // DAO = Data Access Object

    private static final String DB_URL = "jdbc:mysql://localhost:3306/nombre_de_tu_base_de_datos"; // Cambia esto
    private static final String DB_USER = "tu_usuario"; // Cambia esto
    private static final String DB_PASSWORD = "tu_password"; // Cambia esto

    // Método para guardar un nuevo contacto
    public boolean guardarContacto(String nombre, String email) {
        String sql = "INSERT INTO contactos (nombre, email) VALUES (?, ?)";

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nombre);
            pstmt.setString(2, email);

            int filasAfectadas = pstmt.executeUpdate();
            return filasAfectadas > 0; // Retorna true si se insertó al menos una fila

        } catch (SQLException e) {
            e.printStackTrace(); // Manejo básico de errores: imprimir stack trace
            // En una aplicación real, harías un manejo de errores más robusto
            return false;
        }
    }

    // En tu Servlet o Controlador web, llamarías a este método:
    /*
    // Ejemplo muy simplificado en un Servlet (método doPost)
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nombre = request.getParameter("nombre_del_campo_en_html");
        String email = request.getParameter("nombre_del_campo_email_en_html");

        ContactoDAO contactoDAO = new ContactoDAO();
        boolean exito = contactoDAO.guardarContacto(nombre, email);

        if (exito) {
            // Redirigir a una página de éxito o mostrar mensaje
            response.sendRedirect("gracias.html");
        } else {
            // Redirigir a una página de error o mostrar mensaje
            response.sendRedirect("error.html");
        }
    }
    */
}