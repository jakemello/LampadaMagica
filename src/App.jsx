import lampadaMagica from './assets/lampadaMagica.png'
import genioDaLampada from './assets/genioDaLampada.png'
import { useState } from 'react'
import './app.scss'


export default function App(){

// Váriavel de estado
// Uma caixinha que guarda um valor que pode mudar
// Quando o usuário interagir com a página

// Variável [valor atual, função que guarda quando o valor for atualizado]

 const [lampada, setLampada] = useState(lampadaMagica) // Se fosse usar ' ' seria apenas para tipos de texto, e não iria renderizar a imagem na tag img
 const mudarLampada = () => {
   setLampada(lampada === lampadaMagica ? genioDaLampada : lampadaMagica) // Adicionei o Operador ternário (? :) que age como um if...else simplificado no JS
 }

// Arrow Function
// variavél nomeDaVariavel = arrowFunction {
// lógica/código que será executado}

  return (
    <main>
      <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
      <section className={`balaoFala ${lampada === genioDaLampada ? 'visivel' : ''}`}>
        <p>"Olá! Eu sou o gênio da lâmpada! E vou te conceder 3 desejos!".</p>
      </section>
      <img src={lampada} alt="" />
      <button onClick={mudarLampada}>Clique Aqui</button>
    </main>
  ) // Adicionei também ${} (interpolação) que insere variáveis dentro da string para definir dinamicamente a classe CSS
}
