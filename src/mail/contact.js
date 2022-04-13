export function html(data) {
  const { email, telegram, description } = data;

  return `
    <h1>Contact</h1>
    <table style="width: 150px; height: 127px;">
        <tbody>
            
        
            <tr style="height: 23px;">
                <td style="width: 72.0938px; height: 23px;">Email:</td>
                <td style="width: 75.9062px; height: 23px;">${email}</td>
            </tr>
            <tr style="height: 23px;">
                <td style="width: 72.0938px; height: 23px;">Celular:</td>
                <td style="width: 75.9062px; height: 23px;">${telegram}</td>
            </tr>
        </tbody>
    </table>
    <br />
    <div><b>Project short description:</b>
    <p>${description}</p></div>
    `;
}

export function text(data) {
  const { email, telegram, github, website, company, description } = data;

  return `
    Formulário de Contato
    Email: ${email}
    Telegram: ${telegram}
    Github: ${github}
    Website: ${website}
    Company: ${company}
    Description: ${description}
    `;
}
