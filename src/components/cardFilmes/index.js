import React from 'react'
import {Image,Text,TouchableOpacity} from 'react-native'
import styles from './style'

export default function CardMovies({nome,imagem,cor,tamanho,modelo,sexo}){

    return(

        <TouchableOpacity style = {styles.containerJogos}>

        <Image style = {styles.images} source ={require (`../../Img/${imagem}` ) }/>
        <Text style = {styles.text}> {nome}</Text>
        <Text style = {styles.textCor}> 8.9</Text>
        <Text style = {styles.textPreço}> 8.9</Text>
        <Text style = {styles.textModelo}> 8.9</Text>
        <Text style = {styles.textSexo}> 8.9</Text>




        </TouchableOpacity>

    )



}