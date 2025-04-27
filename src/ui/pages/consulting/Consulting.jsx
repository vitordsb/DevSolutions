  import React, { useState } from "react";
  import {
    Wrapper,
    Card,
    Title,
    StyledForm,
    Label,
    Input,
    TextArea,
    Select,
    Button,
    Container
} from "./styles";

  export default function Consulting() {
    const [form, setForm] = useState({
      tipo: "pf",
      name: "",
      ident: "",
      email: "",
      message: "",
      date: "",
    });

    const formatCPF = (value) => {
      const cleaned = value.replace(/\D/g, "").slice(0, 11);
      return cleaned
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };

    const formatCNPJ = (value) => {
      const cleaned = value.replace(/\D/g, "").slice(0, 14);
      return cleaned
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    };

    const formatDateMask = (value) => {
      const cleaned = value.replace(/\D/g, "").slice(0, 8);
      const day = cleaned.slice(0, 2);
      const month = cleaned.slice(2, 4);
      const year = cleaned.slice(4, 8);
      let masked = day;
      if (month) masked += `/${month}`;
      if (year) masked += `/${year}`;
      return masked;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === "ident") {
        const maskedValue = form.tipo === "pf" ? formatCPF(value) : formatCNPJ(value);
        setForm({ ...form, [name]: maskedValue });
      } else if (name === "date") {
        const maskedValue = formatDateMask(value);
        setForm({ ...form, date: maskedValue });
      } else {
        setForm({ ...form, [name]: value });
      }
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/mpwdwnqn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      setForm({
        tipo: "pf",
        name: "",
        ident: "",
        email: "",
        message: "",
        date: "",
      });
    } else {
      alert('Erro ao enviar mensagem.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar mensagem.');
  }
};


    return (
      <Container>
        <Wrapper>
          <Card>
            <Title>Agende uma consultoria conosco</Title>
            <StyledForm onSubmit={handleSubmit}>
              <Label htmlFor="tipo">Tipo de cliente</Label>
              <Select name="tipo" value={form.tipo} onChange={handleChange}>
                <option value="pf">Pessoa Física</option>
                <option value="pj">Pessoa Jurídica</option>
              </Select>

              <Label htmlFor="name">
                {form.tipo === "pf" ? "Nome completo" : "Razão social"}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <Label htmlFor="ident">
                {form.tipo === "pf" ? "CPF" : "CNPJ"}
              </Label>
              <Input
                type="text"
                id="ident"
                name="ident"
                value={form.ident}
                onChange={handleChange}
                required
              />

              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <Label htmlFor="date">Data da consultoria</Label>
              <Input
                type="text"
                id="date"
                name="date"
                placeholder="dd/mm/aaaa"
                value={form.date}
                onChange={handleChange}
                required
              />

              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />

              <Button type="submit">Enviar</Button>
            </StyledForm>
          </Card>
        </Wrapper>
        <img src="/images/D.png" alt="" />
      </Container>
    );
  }
