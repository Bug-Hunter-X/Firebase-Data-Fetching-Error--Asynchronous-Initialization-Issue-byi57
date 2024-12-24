```javascript
// This code attempts to access a Firebase document before it's fully initialized.
firebase.firestore().collection('myCollection').doc('myDoc').get()
  .then(doc => {
    console.log('Document data:', doc.data());
  })
  .catch(error => {
    console.error('Error getting document:', error);
  });
```