# How to Automate Replies with Make.com and Gmail

To automatically reply to inquiries using your Gmail account via Make.com, follow these steps:

## Phase 1: Set up Make.com

1.  **Create a New Scenario**:
    *   Log in to [Make.com](https://www.make.com).
    *   Click **"+ Create a new scenario"**.

2.  **Add a Webhook Trigger**:
    *   Click the big **"+"** button.
    *   Search for **"Webhooks"** and select **"Custom webhook"**.
    *   Click **"Add"**, name it (e.g., "QuickSite Contact Form"), and click **"Save"**.
    *   **Copy the Webhook URL** (it looks like `https://hook.us1.make.com/...`).
    *   *Keep this tab open!*

3.  **Send Test Data**:
    *   You need to send a test form submission from your website so Make knows what data to expect (Name, Email, Message, etc.).
    *   *See "Phase 2" below to update your website code first.*

4.  **Add Gmail Module**:
    *   Once the webhook has received data, click the **"+"** next to the Webhook module.
    *   Search for **"Gmail"** and select **"Send an email"**.
    *   **Connection**: Click "Add" to connect your `quicksiteph@gmail.com` account. You may need to authorize Make.com.

5.  **Configure Email**:
    *   **To**: Click the field and select the **email** variable from the Webhook data (the sender's email).
    *   **Subject**: E.g., "Re: Your Inquiry - QuickSite PH".
    *   **Content**: Write your auto-reply message. You can use variables like `First Name` to personalize it.
        *   *Example*: "Hi [First Name], thanks for reaching out..."

6.  **Turn It On**:
    *   Save your scenario.
    *   Toggle the **Scheduling** switch to **"ON"**.

---

## Phase 2: Update Your Website Code

You need to replace the current `FormSubmit.co` link with your **Make.com Webhook URL**.

1.  **Open** `src/components/sections/Contact.jsx`.
2.  **Locate** the `handleSubmit` function (around line 24).
3.  **Replace** the URL:
    ```javascript
    // OLD
    await fetch('https://formsubmit.co/ajax/quicksiteph@gmail.com', { ... });

    // NEW (Replace YOUR_WEBHOOK_URL with the one you copied in Phase 1)
    await fetch('https://hook.us1.make.com/YOUR_LONG_ID_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    ```

## Phase 3: (Optional) Save to Google Sheets

You can also add a **Google Sheets** module between the Webhook and Gmail modules to save the inquiry details to a spreadsheet for your records.
