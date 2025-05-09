import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Define the Reservation type
interface Reservation {
    name: string;
    phoneNumber: string;
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    numPassengers: number;
    additionalNotes: string;
    createdAt: Timestamp; // Firebase timestamp
}

// Function to add reservation to Firestore
export const addReservation = async (reservation: Reservation) => {
    try {
        const reservationRef = await addDoc(collection(db, 'reservations'), {
            ...reservation,
            createdAt: Timestamp.fromDate(new Date())
        });
        return reservationRef.id; // Return the document ID after successful addition
    } catch (error) {
        console.error("Error adding reservation: ", error);
        throw new Error('Failed to submit reservation');
    }
};
