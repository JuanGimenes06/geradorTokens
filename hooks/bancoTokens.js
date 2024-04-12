import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Clipboard from 'expo-clipboard';
import { motion } from 'framer-motion';


export default function Armazenamento() {

    async function obterItem(chave) {
        try {
            const tokens = await AsyncStorage.getItem(chave);
            return JSON.parse(tokens) || [];
        }

        catch (erro) {
            alert("Erro ao obter itens", erro)
            return [];
        }
    }

    async function salvarItem(chave, valor) {
        try {
            let tokens = await obterItem(chave);
            tokens.push(valor);
            await AsyncStorage.setItem(chave, JSON.stringify(tokens))

        } catch (erro) {
            alert("Erro ao salvar item", erro)
        }
    }

    async function removerItem(chave, item) {
        try {
            let tokens = await obterItem(chave);
            let tokensAtualizados = tokens.filter((token) => {
                return (token !== item)
            })
            await AsyncStorage.setItem(chave, JSON.stringify(tokensAtualizados))
            return tokensAtualizados;

        } catch (erro) {
            alert("Erro ao remover item", erro)
        }
    }

    async function copiarItem(chave, item) {
        try {
            let tokens = await obterItem(chave);

            // Código para copiar o item
            await Clipboard.setStringAsync(item)
            alert('Token copiado com sucesso!');

            return tokens

        } catch (erro) {
            alert('Ocorreu um erro ao copiar o token.', erro);
        }
    }



    return {
        obterItem,
        salvarItem,
        removerItem,
        copiarItem
    }
}