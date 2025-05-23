import React from 'react';
import { Form, Button, message, Input} from "antd";
import emailjs from 'emailjs-com';
import './contacto.css';
import TextArea from 'antd/es/input/TextArea';

const { Item } = Form;

const Contacto = () => {
    const sendEmail = (values) => {
        emailjs.send(
            'service_a4psb7l',
            'template_r0frxhm',
            {
                name: values.name,
                email: values.email,
                title: values.title,
                message: values.message
            },
            'YmOC7UMWHE9njihmO'
        ).then(
            () => {
                message.success("Se mando el correo.");
            },
            () => {
                message.error("Error al mandar correo, intente de nuevo.");
            }
        );
    };
    return(
        <div
            className="contacto-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, justifyContent: 'center', textAlign: "center", flexDirection: 'column'}}>
            <div style={{ marginBottom: 10}}>
              <h1 className='rubik-glitch-regular'>Mandanos un correo</h1>
              </div>
                <Form layout='vertical' onFinish={sendEmail} style={{ width: '550px'}}>
                    <Item
                        name="name"
                        rules={[ 
                            {type: "text"},
                            { required: true, message: "Ingresa un nombre"},
                        ]}
                    >
                        <Input placeholder='Nombre' size="large" />
                    </Item>
                    <Item
                        name="email"
                        rules={[ 
                            {type: "email", message: "Ingresa un correo valido",},
                            { required: true, message: "Ingresa un correo valido"},
                        ]}
                    >
                        <Input placeholder='Correo' size="large" />
                    </Item>

                    <Item
                        name="title"
                        rules={[ 
                            {type: "text", message: "Ingresa un titulo",},
                            { required: true, message: "Ingresa un titulo"},
                        ]}
                    >
                        <Input placeholder='Titulo' size="large" />
                    </Item>

                    <Item
                        name="message"
                        rules={[ 
                            {type: "textarea", message: "Ingresa un mensaje",},
                            { required: true, message: "Ingresa un mensaje"},
                        ]}
                    >
                        <TextArea placeholder='Mensaje' size="large" style={{ height: '100px'}} />
                    </Item>

                    <Item style={{ marginTop: 20 }}>
                        <Button
                            block
                            variant="solid"
                            htmlType="submit"
                            size="large"
                            color="default"
                        >
                            Mandar
                        </Button>
                    </Item>
                </Form>
        </div>
        </div>
    );
}

export default Contacto;