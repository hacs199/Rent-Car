import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Home = () => {
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [carRented, setCarRented] = useState(null);
    const [rentedDates, setRentedDates] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSearch = () => {
        let results = [];
        if (location === "Santa Marta") {
            results = [
                { id: 1, name: "Chevrolet Tacker 2024", description: "$50.000 C/D", image: "src/assets/Chevrolet-tracker.jpg", price: 50000 },
                { id: 2, name: "Toyota Corolla 2025", description: "$40.000 C/D", image: "src/assets/corolla.jpg", price: 40000 },
                { id: 3, name: "Mazda 3 2023", description: "$30.000 C/D", image: "src/assets/Mazda3.jpg", price: 30000 }
            ];
        } else if (location === "Barranquilla") {
            results = [
                { id: 4, name: "Twingo 2009", description: "$30.000 C/D", image: "public/twingo-2009.jpeg", price: 30000 },
                { id: 5, name: "Toyota Hilux 2024", description: "$80.000 C/D", image: "public/hilux.jpg", price: 80000 },
                { id: 6, name: "Toyota fortuner 2017", description: "$60.000 C/D", image: "public/fotuner-2017.jpg", price: 60000 }
            ];
        } else if (location === "Riohacha") {
            results = [
                { id: 7, name: "Carro 7", description: "$10.000.000 C/D", image: "public/Mercedes_Benz_G_Class_2023.jpg", price: 10000000 },
                { id: 8, name: "Carro 8", description: "$100.000 C/D", image: "public/txl.jpg", price: 100000 },
                { id: 9, name: "Carro 9", description: "$120.000 C/D", image: "public/4runner-2025.jpg", price: 120000 }
            ];
        }
        setSearchResults(results);
        setOpen(true);
    };

    const handleRent = (car) => {
        setCarRented(car);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRentedDates({ startDate, endDate });
        setShowForm(false);
        setShowConfirmation(true);
    }

    return (
        <>
            <div style={{ marginBottom: "40px" }}>
                <Stack direction="horizontal" gap={3}>
                    <div>Localización</div>
                    <Form.Select
                        aria-label="Default select example"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Seleccione la ciudad</option>
                        <option value="Santa Marta">Santa Marta</option>
                        <option value="Barranquilla">Barranquilla</option>
                        <option value="Riohacha">Riohacha</option>
                    </Form.Select>
                    <div>Fecha Inicio</div>
                    <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <div>Fecha Fin</div>
                    <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <Button
                        variant="primary"
                        onClick={handleSearch}
                    >
                        Buscar
                    </Button>
                </Stack>
            </div>
            <Collapse in={open}>
                <Stack direction="horizontal" gap={3} style={{ justifyContent: "center" }}>
                    {searchResults.map((car) => (
                        <Card key={car.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={car.image} style={{ height: 'rem', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{car.name}</Card.Title>
                                <Card.Text>
                                    {car.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleRent(car)}>Rentar</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Stack>
            </Collapse>
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombres"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Apellidos"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Correo Electronico</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor coloque su correo.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dirección"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Proporcione su Dirección.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Proporcione su ciudad.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Celular"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Coloque un numero valido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Aceptar términos y condiciones"
                            feedback="Debes aceptar antes de enviar."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Confirmar</Button>
                </Form>
            )}
            {carRented && (
                <Container className="d-flex justify-content-center">
                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                        <Card.Img variant="top" src={carRented.image} />
                        <Card.Body>
                            <Card.Title>{carRented.name}</Card.Title>
                            <Card.Text>
                                Rentado por: {firstName} {lastName}
                            </Card.Text>
                            <Card.Text>
                                Fechas de renta: {rentedDates.startDate} - {rentedDates.endDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </>
    );
}

export default Home;

