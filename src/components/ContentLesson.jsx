import '../styles/lesson.css'
import preguntas from '../resources/EcuacionesQuizz'
import { useState } from 'react'

export function ContentLesson({children, images, title}) {

    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuacion, setPuntuacion] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    
    let link;
    console.log(title)

    if (title === "Ecuaciones") {
        link = "/lessons/algebra/ecuaciones"; 
    }

    function handleAnswerSubmit(isCorrect, e) {
        if (isCorrect) setPuntuacion(puntuacion + 1)
        e.target.classList.add(isCorrect ? "correct" : "incorrect")

        setTimeout(() => {
            if (preguntaActual === preguntas.length - 1) {
                setIsFinished(true)
            } else {
                setPreguntaActual(preguntaActual + 1)
            }
        }, 1500)
    }

    function resetGame() {
        setPreguntaActual(0)
        setPuntuacion(0)
        setIsFinished(false)
    }

    if (isFinished) {
        return (
            <div className='quizz'>
                <div className='juego-terminado'>
                    <span>Obtuviste {puntuacion} de {preguntas.length}{" "}</span>
                    <button onClick={() => resetGame()}>Volver a jugar</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <section className="content__section">
                <h1 className='content__title'>{title}</h1>
                {title === "Ecuaciones" && (
                    <article>
                        <p className='content__paragraph'>Las ecuaciones algebraicas son una igualdad que puede expresarse como un polinomio igualado a cero.</p>
                        <p className='content__paragraph'>
                        Vale precisar que un polinomio, en matemáticas, es una expresión formada por números y letras. Esto se suman y/o restan y pueden estar elevados a una potencia mayor a uno.
                        </p>
                        <p className='content__paragraph'>
                        Para explicarlo de otro modo, una ecuación algebraica está constituida por una o más incógnitas, cada una de las cuales están multiplicadas por números conocidos como coeficientes. Por ejemplo, veamos la siguiente ecuación donde los coeficientes serían 5, 8, y -3:
                        </p>
                        <pre className='content_ecuation'>
                            <code>5x<sup>2</sup>+8x-3=0</code>
                        </pre>
                        <h2 className='content__subtitle'>Tipos de ecuaciones algebraicas</h2>
                        <p className='content__paragraph'>Los tipos de ecuaciones algebraicas, según la potencia a la que está elevada la incógnita son:</p>
                        <p className='content__paragraph'>
                        <strong>De primer grado:</strong> Las incógnitas o variables están elevadas a la potencia 1 y no hay dos variables multiplicadas entre sí. También se le conoce como ecuación lineal. Algunos ejemplos pueden ser los siguientes:
                        </p>
                        <pre className='content_ecuation'>
                            <code>4x+5y-7=0</code>
                        </pre>
                        <p className='content__paragraph'>
                        <strong>De segundo grado:</strong> s una ecuación donde la variable está elevada al cuadrado en alguno de sus términos. También se le conoce como ecuación cuadrática. Su forma general es la siguiente, donde a, b y c son los coeficientes, mientras que x es la variable:
                        </p>
                        <pre className='content_ecuation'>
                            <code>ax<sup>2</sup>+bx+c=0</code>
                        </pre>
                        <div className='quiz'>
                            <div className='quiz__izquierdo'>
                                <div className='numero__pregunta'>
                                    <span>Pregunta {preguntaActual + 1} de </span>{preguntas.length}
                                </div>
                                <div className='titulo__pregunta'>{preguntas[preguntaActual].titulo}</div>
                            </div>
                            <div className='quiz__derecho'>
                                {preguntas[preguntaActual].opciones.map((respuesta, index) => {
                                    return (
                                        <button
                                            key={preguntaActual + "-" + index}
                                            className="button--default"
                                            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                                        >
                                            {respuesta.textoRespuesta}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </article>
                )}
            </section>
        </>
    )
}
