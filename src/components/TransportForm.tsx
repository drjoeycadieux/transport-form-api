'use client';
import { useState } from "react";
import { addReservation } from "../lib/reservation"; // Adjust path if needed
import styles from "../app/page.module.css";
import { firebase } from "firebase/app"; // Ensure Firebase is properly initialized in your project

const TaxiReservationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "",
        numPassengers: 1,
        additionalNotes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "numPassengers" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const reservationId = await addReservation({
                createdAt: firebase.firestore.Timestamp.fromDate(new Date()), // Converts to Firestore Timestamp
                ...formData,
            });

            alert(`Reservation Submitted Successfully! Reservation ID: ${reservationId}`);

            // Reset form
            setFormData({
                name: "",
                phoneNumber: "",
                pickupLocation: "",
                dropoffLocation: "",
                pickupDate: "",
                numPassengers: 1,
                additionalNotes: "",
            });
        } catch (error) {
            console.error("Error submitting reservation: ", error);
            alert("Failed to submit reservation.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Transport Reservation</h2>

            <div className={styles.group}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="phoneNumber" className={styles.label}>Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="pickupLocation" className={styles.label}>Pickup Location:</label>
                <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="dropoffLocation" className={styles.label}>Drop-off Location:</label>
                <input
                    type="text"
                    id="dropoffLocation"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="pickupDate" className={styles.label}>Pickup Date & Time:</label>
                <input
                    type="datetime-local"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="numPassengers" className={styles.label}>Number of Passengers:</label>
                <input
                    type="number"
                    id="numPassengers"
                    name="numPassengers"
                    min={1}
                    value={formData.numPassengers}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.numberInput}`}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="additionalNotes" className={styles.label}>Additional Notes:</label>
                <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Any special requests or notes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className={styles.textarea}
                />
            </div>

            <button type="submit" className={styles.button}>Submit Reservation</button>
        </form>
    );
};

export default TaxiReservationForm;
