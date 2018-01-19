import React, { Component } from 'react';

export default class Book extends Component {
    render() {
      let { match } = this.props;
      let book = books.find(book => book.id === match.params.bookID);
      let preview = book ? book.preview : 'No Preview Available';
      return (
        <div className='text-justify'>{ preview }</div>
      );
    }
}

const books = [
  {
    id: 'angelsanddemons',
    preview: `In Angels & Demons, Robert Langdon is called to CERN headquarters in Switzerland to find about the religious symbological implications of the death of CERN's finest and best-known physicist, Leonardo Vetra, a Catholic priest who has been branded with the Illuminati symbol. When he starts to investigate the murder, his obsession for the subject history comes into play. Langdon is later joined in the investigation by Vittoria Vetra (Leonardo's adopted daughter) and they start their journey to the Vatican to unlock the mystery behind the Illuminati, an anti-Catholic secret society which, according to the plot, has deeply infiltrated many global institutions, political, economical and religious. Langdon and Vetra solve the mystery of the Illuminati by following the Path of Illumination[13] and in so doing explain the disappearances of four Cardinals during a papal conclave, the murder of Leonardo Vetra, and the theft of antimatter (a substance that can be used for mass destruction). At the end of the novel Langdon ends up having a relationship with Vittoria Vetra. In the last few sentences of Angels & Demons, Vittoria Vetra asks him if he has ever had a divine experience. When he replies in the negative, Vittoria slips off her terrycloth robe, saying, "You've never been to bed with a yoga master, have you?" Their relationship, however, is only referred to in The Da Vinci Code, mentioning the fact that Langdon had last seen Vittoria a year previously.`
  },
  {
    id: 'thedavincicode',
    preview: `In the beginning of 2003's The Da Vinci Code, Robert Langdon is in Paris to give a lecture on his work. Having made an appointment to meet with Jacques Saunière, the curator of the Louvre, he is startled to find the French police at his hotel room door. They inform him that Saunière has been murdered and they would like his immediate assistance at the Louvre to help them solve the crime. Unknown to Langdon, he is in fact the prime suspect in the murder and has been summoned to the scene of the crime so that the police may extract a confession from him. While he is in the Louvre, he meets Sophie Neveu, a young cryptologist from the DCPJ. When Langdon and Sophie get the chance to talk in private, he finds out that Jacques Saunière is her grandfather. Saunière instructs Sophie to 'find Robert Langdon', according to the message he left for her in the floor. Hence, Sophie believes he is innocent of her grandfather's murder.`
  },
  {
    id: 'thelostsymbol',
    preview: `In The Lost Symbol, Robert Langdon has an adventure with the concepts of Freemasonry in Washington D.C. Tricked into visiting the nation's Capitol, Robert Langdon spends twelve hours racing through the monuments and buildings of the USA's forefathers, searching for the truth about the secret society of the Masons. Behind new doors lie secrets that promise to change the way people view science and politics, now threatened by Zachary Solomon, the renegade, estranged son of Robert Langdon's friend, Peter Solomon, who has himself been kidnapped by Zachary, now going by the name Mal'akh. Robert Langdon is the last line of defense. With help from Katherine Solomon (Peter's younger sister), Warren Bellamy (the Architect of the Capitol) and Inoue Sato (the director of the Office of Security).`
  },
  {
    id: 'inferno',
    preview: `In Inferno, Langdon wakes up in an Italian hospital with no memory of the events that led him to be in Italy. Soon he realizes that someone is trying to kill him. Langdon travels to Florence, Venice, and Istanbul with Doctor Sienna Brooks to prevent a biological attack by looking for a deadly virus that was planted by a client of a shadowy consulting group called The Consortium. In the course of this, Langdon must decipher clues employing allusions to the works of Sandro Botticelli and Dante Alighieri, the writer of Inferno, the first chapter of the epic poem The Divine Comedy, around which much of the plot revolves.`
  },
  {
    id: 'origin',
    preview: `Robert Langdon arrives at the ultramodern Guggenheim Museum Bilbao to attend a major announcement—the unveiling of a discovery that “will change the face of science forever.” The evening’s host is Edmond Kirsch, a forty-year-old billionaire and futurist whose dazzling high-tech inventions and audacious predictions have made him a renowned global figure. Kirsch, who was one of Langdon’s first students at Harvard two decades earlier, is about to reveal an astonishing breakthrough . . . one that will answer two of the fundamental questions of human existence.`
  }
];
