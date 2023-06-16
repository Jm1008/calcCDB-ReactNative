// Importações
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./src/styles";

////////////////////////////////////////////////////////////////

// Função Principal

export default function App() {
  // consts principais
  const [tempo, setTempo] = useState(0);
  const [val, setVal] = useState("");
  const [valM, setValM] = useState("");
  const [CDB, setCDB] = useState(0);
  const [tot, setTot] = useState(0);
  const [tempM, setTempM] = useState(0);
  const [tempoF, setTempoF] = useState(0);
  const [porc, setPorc] = useState(0);
  const [tipoT, setTipoT] = useState([]);

  const [valCDB, setValCDB] = useState([
    { value: 22.5, dias: 180, diasFront: "180", text: "Até" },
    { value: 20, dias: 360, diasFront: "360", text: "Até" },
    { value: 17.5, dias: 720, diasFront: "720", text: "Até" },
    { value: 15, dias: Infinity, diasFront: "720", text: "Maior que" },
  ]);

  const optData = [
    { value: 1, label: "Dia" },
    { value: 2, label: "Mês" },
    { value: 3, label: "Ano" },
  ];

  console.log(tempo);
  console.log("tipo de tempo", tipoT);

  ////////////////////////////////////////////////////////////////////////////////

  // estrutura logica

  useEffect(() => {
    logic();
    mensal();
  });

  function logic() {
    if (tipoT.value === 2) {
      setTempoF(tempo * 30);
      setTempM(tempo);
    } else if (tipoT.value === 3) {
      setTempoF(tempo * 365);
      setTempM(tempo * 12);
    } else {
      setTempoF(tempo);
      setTempM(tempo / 30);
    }
    console.log("tempo final", tempoF);
    setCDB(valCDB.find((tax) => tempoF <= tax.dias).value);
    console.log(CDB);
  }
  const valNumber = parseFloat(val.replace(",", "."));
  const valNumberM = parseFloat(valM.replace(",", "."));
  function mensal() {
    for (let i = 1; i <= tempM; i++) {
      setTot(valNumber + valNumberM);
      console.log("meu deus que pau enorme");
    }
    if (valM == "") {
      setTot(valNumber);
    } else {
      if ((tempoF > 0) & (tempoF <= 30)) {
        alert("tempo menor que 1 mês, remova o valor mensal");
      }
    }
  }
  const taxCorr = 1 - CDB / 100;
  const selicF = 13.75 * (porc / 100);
  const CDI = selicF / 100;
  const juros = tot * (Math.pow(1 + (CDI * taxCorr) / 12, tempoF / 30) - 1);
  const jurosFormatado = juros.toFixed(2).replace(".", ",");
  const valTotal = tot * Math.pow(1 + (CDI * taxCorr) / 12, tempoF / 30);
  const totalFormatado = valTotal.toFixed(2).replace(".", ",");

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container.div}>
      <Text style={styles.container.text}>Digite a % sobre a taxa selic</Text>
      <TextInput
        placeholder="0"
        style={styles.container.input}
        onChangeText={setPorc}
      />
      <Text style={styles.container.text}>Digite o valor inicial</Text>
      <TextInput
        placeholder="0,00"
        style={styles.container.input}
        onChangeText={setVal}
      />
      <Text style={styles.container.text}>Valor Mensal</Text>
      <TextInput
        placeholder="0,00"
        style={styles.container.input}
        onChangeText={setValM}
      />
      <Text style={styles.container.text}>Selecione o tempo = </Text>
      <SafeAreaView style={styles.container.select}>
        <Select
          options={optData}
          onChange={setTipoT}
          placeholder="Selecionar..."
          style={styles.container.mg}
        />
      </SafeAreaView>
      <Text style={styles.container.text}> Tempo </Text>
      <TextInput
        placeholder="0"
        style={styles.container.input}
        onChangeText={setTempo}
        keyboardType="numeric"
      />

      <Text style={styles.container.text}>Juros = {jurosFormatado}</Text>
      <Text style={styles.container.text}>Total = {totalFormatado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
