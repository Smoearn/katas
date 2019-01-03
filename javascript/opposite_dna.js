function DNAStrand(dna){
    container = []

    for (let index = 0; index < dna.length; index++) {
        if (dna[index] == 'A' ) {
            container.push('T');
        }else if(dna[index] == 'T'){
            container.push('A');
        }else if(dna[index] == 'C'){
            container.push('G');
        }else if(dna[index] == 'G'){
            container.push('C')
        }
    }

    return container.join('')
  }

  function DNAStrand(dna){

    for (let index = 0; index < dna.length; index++) {
        if (dna[index] == 'A' ) {
            dna.replace('T','A');
        }else if(dna[index] == 'T'){
            dna.replace('T','A');
        }else if(dna[index] == 'C'){
            dna.replace('C','G');
        }else if(dna[index] == 'G'){
            dna.replace('G','C');
        }
    }

    return dna
  }
  console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
  console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
  console.log(DNAStrand("GTAT"),"CATA","String GTAT is");


  //a and t
  //C and G
 