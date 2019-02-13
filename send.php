<?
date_default_timezone_set('Europe/Moscow');
$leadData = $_POST;
$resArr = ['mess'=>'', 'res'=>false];

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $leadData['NAME'] && $leadData['PHONE'] && $leadData['CALLBACK']){
    $name = trim(strip_tags($_POST['NAME']));
    $phone = trim(strip_tags($_POST['PHONE']));
    $theme = 'Обратный звонок';



    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= "From: Potolki-S";

    $date = date('d-m-Y, H:i:s');

    $message = "Тема: $theme<br>
                Имя: $name<br>
                Телефон: $phone<br>
                Дата и Время отправки: $date";
    $subject = 'Запрос обратного звонка с сайта';

    $result = imap_mail('potolki-stavropol@mail.ru', $subject, $message, $headers, null, 'help-line@inbox.ru');

    if ($result){
        $resArr['mess'] = 'Мы свяжемся с вами в ближайшее время';
        $resArr['res'] = true;
    }
    else{
        $resArr['mess'] = 'Что то пошло не так';
    }

}

else
{
    $resArr['mess'] = 'Все поля должны быть заполнены';
}

print json_encode($resArr);
