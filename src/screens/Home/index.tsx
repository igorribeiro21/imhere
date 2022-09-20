import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {
    const participants = ['Igor', 'Vinicius', 'Diego', 'Biro', 'Leticia', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

    function handleParticipantAdd() {
        console.log('Você clicou no botão');
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou para remover um participante ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.eventName}
            >Nome do Evento
            </Text>
            <Text
                style={styles.eventDate}
            >
                Sexta,4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6b6b6b"}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda?Adicione participantes a sua lista de presença
                    </Text>
                )}
            />

        </View>
    );
}