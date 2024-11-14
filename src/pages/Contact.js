import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading"> Entre em contato</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8772.81888089496!2d-43.67026538777193!3d-22.40959740437472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9930cf7c22de05%3A0xc63f64f24c89cbf6!2sUniversidade%20de%20Vassouras!5e0!3m2!1spt-BR!2sbr!4v1727897034486!5m2!1spt-BR!2sbr"
        width="80%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/x/XxXxXxXxX"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              required
              autoComplete="off"
              placeholder="Nome"
            />
            <input
              type="email"
              name="Email"
              required
              autoComplete="off"
              placeholder="E-mail"
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
