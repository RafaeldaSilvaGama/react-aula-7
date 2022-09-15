import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import { Divlista } from '../style/styled'
import FormTarefas from '../formTarefas/FormTarefas'

export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([
    {
    titulo: "Lista de pagamento",
    setor: "Dep. Vendas",
    descricao: "Levantar os valores de vendas." 
  },
  {
    titulo: "Planilha de salários",
    setor: "Dep. Pessoal",
    descricao: "Gerar planilhas." 
  }
])

//add-tarefa
const addTarefa = (e) =>{
  e.preventDefault()
  
    //adicionar mais uma tarefa a lista de tarefas
    setNTarefa({titulo:"",setor:"",descricao:""})
    setTarefa([...tarefa, novaTarefa])


//  const novaTarefa = {
//    titulo: "Planilha de notas",
//    setor: "Dep. Graduação",
//    descricao: "Lançar notas." 
 //}


}

//Criando state de nova tarefa
  const [nTarefa,setNTarefa] = useState({titulo:"",setor:"",descricao:""})
  
  //função de captura dos dados do formulário
  const captura = (e)=>{
    const {value,name} = e.target

    if (name === "titulo") {
        setNTarefa({titulo: value, setor: nTarefa.setor, descricao: nTarefa.descricao})
    } else if (name === "setor") {
      setNTarefa({titulo: nTarefa.titulo, setor: value, descricao: nTarefa.descricao})
    } else if (name === "descricao") {
      setNTarefa({titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: value})
    }

  }

  return (
    <Divlista>
        <FormTarefas
          funcaoAddTarefa={addTarefa}
          novaTarefa={nTarefa}
          oQueFoiDigitado={captura}
        />

        {tarefa.map((tar,i)=>
        <Tarefa
        key={i}
        tituloProps={tar.titulo}
        setorProps={tar.setor}
        descricaoProps={tar.descricao}
        />
      )}
  
    </Divlista>
  )


        }