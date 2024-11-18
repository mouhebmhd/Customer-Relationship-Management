module.exports = (factureData, customers ) => {
    const today = new Date();
    return `
        <!doctype html>
        <html>
           <head>
              <meta charset="utf-8">
              <title>PDF Result Template</title>
              <style>
                 /* Your CSS styles here */
              </style>
           </head>
           <body>
              <div class="invoice-box">
                 <!-- Invoice details -->
                 <h2>Command {factureData.description_commande}</h2>
                 <p>
                     ID: ${factureData.idcommande}
                     <br />
                     Date: ${factureData.date_commande}
                     <br />
                     Total Amount: ${factureData.montant_total_commande}
                     <br />
                     Address: ${factureData.adresselivraison_commande}
                     <br />
                     Payment Method: ${factureData.modepaiement_commande}<br />
                     Status: ${factureData.statut_commande}
                     <br />
                     Delivery Date: ${factureData.date_livraison_commande}
                     <br />
                     Delivery Method: ${factureData.metho_delivraison_commande}
                     <br />
                 </p>
                 <h2>Invoice Details</h2>
                 <p>
                    ID: ${factureData.idfacture}<br>
                    Date: ${factureData.date_facture}<br>
                    Status: ${factureData.etat_facture}<br>
                    Total Amount: ${factureData.montant_total_facture}<br>
                    Payment Method: ${factureData.methode_paiment_facture}<br>
                    Due Date: ${factureData.date_echeance}<br>
                    Payment Status: ${factureData.statut_paiement_facture}<br>
                 </p>

                 <!-- Customer details -->
                 <h2>Customer Details</h2>
                 ${customers.map(customer => `
                    <p>
                        ID: ${customer.idclient}<br>
                        Name: ${customer.nom_client} ${customer.prenom_client}<br>
                        Phone: ${customer.telephone_client}<br>
                        Address: ${customer.adresse_client}<br>
                        Email: ${customer.email_client}<br>
                        Genre: ${customer.genre_client}<br>
                        Date of Birth: ${customer.datede_naissance_client}<br>
                    </p>
                 `).join('')}

                 <!-- Additional styling and content -->
              </div>
           </body>
        </html>
    `;
};
