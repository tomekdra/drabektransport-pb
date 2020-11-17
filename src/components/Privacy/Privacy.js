import React from "react";
import './Privacy.scss';

const Privacy = () => {
    return (
        <div className={"privacy"}>
            <header>
                <div className="privacy-header-image"></div>
            </header>
            <article className={"privacy-container"}>
                <div className="privacy-title"><h1>Klauzula informacyjna RODO w zakresie przetwarzania danych
                    osobowych <i className={"icon-doc-text"}/> </h1></div>

                <ol>
                    <li><span> Administratorem danych osobowych jest "DRABEK" PAWEŁ DRABEK, ul. Słowików 14/6, 41-940 Piekary Śląskie, śląskie; </span></li>
                    <li><span> Przekazane dane osobowe przetwarzane będą w celu realizacji usług, obsługi zgłoszeń i
                        udzielania odpowiedzi na zgłoszenia;</span>
                    </li>
                    <li><span> Kategorie danych osobowych obejmują m.in. imię i nazwisko, numer telefonu, adres e-mail, adres,
                        dane dedykowane do procesu/usługi/projektu;</span>
                    </li>
                    <li><span> Państwa dane osobowe będą przechowywane przez okres istnienia prawnie uzasadnionego interesu
                        administratora, chyba że Pani / Pan wyrazi sprzeciw wobec przetwarzania danych;</span>
                    </li>
                    <li><span> Państwa dane nie będą przekazywane do państwa trzeciego ani organizacji międzynarodowej;</span></li>
                    <li><span> Posiadają Państwo prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia,
                        ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do
                        cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego
                        dokonano
                        na podstawie zgody przed jej cofnięciem;</span>
                    </li>
                    <li><span> Mają Państwo prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych
                        osobowych, którym jest Prezes Urzędu Ochrony Danych Osobowych, gdy uznają Państwo, iż
                        przetwarzanie
                        Państwa danych osobowych narusza przepisy ustawy z dnia 10 maja 2018 r. o ochronie danych
                        osobowych
                        (tekst jednolity Dz. U. z 2018 r., poz. 1000) lub przepisy Rozporządzenia Parlamentu
                        Europejskiego i
                        Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
                        dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r.
                        (Dz.Urz.UE.L
                        Nr 119, str. 1);</span>
                    </li>
                    <li><span> Dane udostępnione przez Panią/Pana nie będą podlegały zautomatyzowanemu podejmowaniu decyzji
                        oraz profilowaniu;</span>
                    </li>
                    <li><span> Dane pochodzą od osób, których dane dotyczą;</span></li>
                    <li><span> Podanie przez Państwa danych osobowych jest dobrowolne;</span></li>
                </ol>


            </article>


        </div>
    )
}

export default Privacy;