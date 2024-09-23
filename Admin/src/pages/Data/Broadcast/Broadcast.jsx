// client/src/components/SendMessageForm.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Broadcast() {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/twilio/send-whatsapp', { to, message });
      if (response.data.success) {
        alert('Message sent successfully!');
      }
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">Broadcast</h1>
        <p className="text-green-600">Broadcasting your messages to your Contacts.</p>
      </span>

      {/* Table */}
      <div className="w-fit mt-10">
        <form onSubmit={sendMessage} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Recipient's WhatsApp Number"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="text-black px-5 py-2 rounded-lg"
          />
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-black px-5 py-2 rounded-lg"
          />
          <button type="submit" className="font-bold text-xl bg-green-700 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  )
}