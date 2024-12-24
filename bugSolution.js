```javascript
// Correct asynchronous handling using async/await
async function getDocumentData() {
  try {
    const docRef = firebase.firestore().collection('myCollection').doc('myDoc');
    const doc = await docRef.get();
    if (doc.exists) {
      console.log('Document data:', doc.data());
    } else {
      console.log('Document does not exist!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getDocumentData();
```