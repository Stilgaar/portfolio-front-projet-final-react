const adminData =  &#x0007B; 

    addRib &#x00028; req, res, next &#x00029;   &#x0007B; 
        let  &#x0007B;  titulaire, domiciliation, iban, codeBanque, codeGuichet, numeroCompte, clefRib, bicSwift  &#x0007D;  = req.body;
        if  &#x00028; !titulaire || !domiciliation || !iban || !codeBanque || !codeGuichet || !numeroCompte || !clefRib || !bicSwift &#x00029;   &#x0007B;  return res.send &#x00028; "empty" &#x00029;   &#x0007D; 
        AdminModel.findOneAndUpdate &#x00028;  &#x0007B;  lerib: "01"  &#x0007D; ,
             &#x0007B;  $set:  &#x0007B; 
                    titulaire: titulaire, domiciliation: domiciliation, iban: iban, codeBanque: codeBanque, codeGuichet: codeGuichet, numeroCompte: numeroCompte, clefRib: clefRib, bicSwift: bicSwift
                 &#x0007D; 
             &#x0007D; ,  &#x0007B;  new: true  &#x0007D; ,  &#x00028; err, updatedRib &#x00029;  =&#x0003E;  &#x0007B; 
                if  &#x00028; err &#x00029;   &#x0007B;  res.send &#x00028; err &#x00029;   &#x0007D; 
                if  &#x00028; !updatedRib &#x00029;   &#x0007B; 
                    AdminModel.create &#x00028;  &#x0007B; 
                        titulaire, domiciliation, iban, codeBanque, codeGuichet, numeroCompte, clefRib, bicSwift
                     &#x0007D;  &#x00029; .then &#x00028;  &#x00028; newRib &#x00029;  =&#x0003E; res.send &#x00028; newRib &#x00029;  &#x00029; 
                        .catch &#x00028;  &#x00028; err &#x00029;  =&#x0003E; res.send &#x00028; err &#x00029;  &#x00029; 
                 &#x0007D;  else  &#x0007B; res.send &#x00028; updatedRib &#x00029;  &#x0007D; 
             &#x0007D;  &#x00029; 
     &#x0007D; ,