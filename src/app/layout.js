import Script from "next/script";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/custom-animated.css";
import "../../public/assets/css/default.css";
import "../../public/assets/css/font-awesome.min.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/magnific.dark.css";
import "../../public/assets/css/magnific.rtl.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>MYAGENTIA | Agentes IA para tu negocio</title>
        <link rel="icon" href="/assets/images/ico.png" type="image/png" />
        <style>
           {
            `
            #chatbot-frame {
                width: 300px;
                height: 500px;
                border: none;
                position: fixed;
                bottom: 0;
                right: 0;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                z-index: 500;
                box-shadow:none;
            }
             `
          }
        </style>
      </head>
      <body>
        {children}
        <div id="chatbot-widget">
            <iframe
                id="chatbot-frame"
                src="hhttps://chatbot.myagentia.com/" 
            >
            </iframe>
        </div>   
      </body>
      <Script
        strategy="afterInteractive">
          {
            `
            // Aquí puedes agregar la lógica para controlar la visibilidad del chatbot.
            const chatbotFrame = document.getElementById("chatbot-frame");

            // Lógica para abrir y cerrar el chatbot cuando el usuario haga click en un botón o en algún evento
            function toggleChatbot() {
                if (chatbotFrame.style.display === "none") {
                    chatbotFrame.style.display = "block";
                } else {
                    chatbotFrame.style.display = "none";
                }
            }

            // Para abrir el chatbot, por ejemplo, cuando el usuario hace clic en un botón:
            document.getElementById("open-chatbot-button").addEventListener("click", toggleChatbot);
            `
          }
      </Script>
    </html>
  );
}
