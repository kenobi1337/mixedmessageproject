const message = {
    greeting: ['Hello', 'Good morning everyone', 'Goodafternoon everybody'],
    agenda: ['Today\'s class is Math', 'Today\'s class is Science', 'Today\'s class is Coding'],
    lesson: ['We\'re having test today', 'We\'re going to play Kahoot today', 'Today We\'re going to field trip!'],
    dismiss: ['\nBye', '\nClass dismiss, have a good day guys!', 'Byeeeeeeeeee']
}
let teacherMessage = [];
for (let messages in message) {
    let random = Math.floor(Math.random() * 3);
    switch(messages) {
        case 'greeting':
            teacherMessage.push(message.greeting[random]);
            break;
        case 'agenda':
            teacherMessage.push(message.agenda[random]);
            break;
        case 'lesson':
            teacherMessage.push(message.lesson[random]);
            break;
        case 'dismiss':
            teacherMessage.push(message.dismiss[random]);
            break;
        default:
            console.log('error');
    }
}
let formatted = teacherMessage.join('\n');
console.log(formatted);