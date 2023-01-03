import type { Sequelize } from "sequelize";
import { EE_old as _EE_old } from "./EE_old";
import type { EE_oldAttributes, EE_oldCreationAttributes } from "./EE_old";
import { Plan1 as _Plan1 } from "./Plan1";
import type { Plan1Attributes, Plan1CreationAttributes } from "./Plan1";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";
import { UsuarioNivel as _UsuarioNivel } from "./UsuarioNivel";
import type { UsuarioNivelAttributes, UsuarioNivelCreationAttributes } from "./UsuarioNivel";
import { devolucaoChave as _devolucaoChave } from "./devolucaoChave";
import type { devolucaoChaveAttributes, devolucaoChaveCreationAttributes } from "./devolucaoChave";
import { historico as _historico } from "./historico";
import type { historicoAttributes, historicoCreationAttributes } from "./historico";
import { historico2 as _historico2 } from "./historico2";
import type { historico2Attributes, historico2CreationAttributes } from "./historico2";
import { historicoBackup as _historicoBackup } from "./historicoBackup";
import type { historicoBackupAttributes, historicoBackupCreationAttributes } from "./historicoBackup";
import { historicoChromebook as _historicoChromebook } from "./historicoChromebook";
import type { historicoChromebookAttributes, historicoChromebookCreationAttributes } from "./historicoChromebook";
import { historicoEmbalagem as _historicoEmbalagem } from "./historicoEmbalagem";
import type { historicoEmbalagemAttributes, historicoEmbalagemCreationAttributes } from "./historicoEmbalagem";
import { historicoJob as _historicoJob } from "./historicoJob";
import type { historicoJobAttributes, historicoJobCreationAttributes } from "./historicoJob";
import { historicoRetrabalho as _historicoRetrabalho } from "./historicoRetrabalho";
import type { historicoRetrabalhoAttributes, historicoRetrabalhoCreationAttributes } from "./historicoRetrabalho";
import { historico_mac as _historico_mac } from "./historico_mac";
import type { historico_macAttributes, historico_macCreationAttributes } from "./historico_mac";
import { modelVersionWindows as _modelVersionWindows } from "./modelVersionWindows";
import type { modelVersionWindowsAttributes, modelVersionWindowsCreationAttributes } from "./modelVersionWindows";
import { modelo as _modelo } from "./modelo";
import type { modeloAttributes, modeloCreationAttributes } from "./modelo";
import { modeloChave as _modeloChave } from "./modeloChave";
import type { modeloChaveAttributes, modeloChaveCreationAttributes } from "./modeloChave";
import { modeloChaveConfig as _modeloChaveConfig } from "./modeloChaveConfig";
import type { modeloChaveConfigAttributes, modeloChaveConfigCreationAttributes } from "./modeloChaveConfig";
import { modeloCheckSD as _modeloCheckSD } from "./modeloCheckSD";
import type { modeloCheckSDAttributes, modeloCheckSDCreationAttributes } from "./modeloCheckSD";
import { modeloCheckSecureBoot as _modeloCheckSecureBoot } from "./modeloCheckSecureBoot";
import type { modeloCheckSecureBootAttributes, modeloCheckSecureBootCreationAttributes } from "./modeloCheckSecureBoot";
import { modeloDesktop as _modeloDesktop } from "./modeloDesktop";
import type { modeloDesktopAttributes, modeloDesktopCreationAttributes } from "./modeloDesktop";
import { modeloImage as _modeloImage } from "./modeloImage";
import type { modeloImageAttributes, modeloImageCreationAttributes } from "./modeloImage";
import { modeloImageStatus as _modeloImageStatus } from "./modeloImageStatus";
import type { modeloImageStatusAttributes, modeloImageStatusCreationAttributes } from "./modeloImageStatus";
import { modeloLinhaStatus as _modeloLinhaStatus } from "./modeloLinhaStatus";
import type { modeloLinhaStatusAttributes, modeloLinhaStatusCreationAttributes } from "./modeloLinhaStatus";
import { modeloMemorySPDStatus as _modeloMemorySPDStatus } from "./modeloMemorySPDStatus";
import type { modeloMemorySPDStatusAttributes, modeloMemorySPDStatusCreationAttributes } from "./modeloMemorySPDStatus";
import { modeloResolucaoStatus as _modeloResolucaoStatus } from "./modeloResolucaoStatus";
import type { modeloResolucaoStatusAttributes, modeloResolucaoStatusCreationAttributes } from "./modeloResolucaoStatus";
import { modeloRetrabalho as _modeloRetrabalho } from "./modeloRetrabalho";
import type { modeloRetrabalhoAttributes, modeloRetrabalhoCreationAttributes } from "./modeloRetrabalho";
import { modeloSistemaOperacional as _modeloSistemaOperacional } from "./modeloSistemaOperacional";
import type { modeloSistemaOperacionalAttributes, modeloSistemaOperacionalCreationAttributes } from "./modeloSistemaOperacional";
import { modeloSmbiosStatus as _modeloSmbiosStatus } from "./modeloSmbiosStatus";
import type { modeloSmbiosStatusAttributes, modeloSmbiosStatusCreationAttributes } from "./modeloSmbiosStatus";
import { modeloSystemInfoStatus as _modeloSystemInfoStatus } from "./modeloSystemInfoStatus";
import type { modeloSystemInfoStatusAttributes, modeloSystemInfoStatusCreationAttributes } from "./modeloSystemInfoStatus";
import { modeloSystemInfo_old as _modeloSystemInfo_old } from "./modeloSystemInfo_old";
import type { modeloSystemInfo_oldAttributes, modeloSystemInfo_oldCreationAttributes } from "./modeloSystemInfo_old";
import { modeloTeste as _modeloTeste } from "./modeloTeste";
import type { modeloTesteAttributes, modeloTesteCreationAttributes } from "./modeloTeste";
import { modeloVersionWindowsStatus as _modeloVersionWindowsStatus } from "./modeloVersionWindowsStatus";
import type { modeloVersionWindowsStatusAttributes, modeloVersionWindowsStatusCreationAttributes } from "./modeloVersionWindowsStatus";
import { multisoftware_users as _multisoftware_users } from "./multisoftware_users";
import type { multisoftware_usersAttributes, multisoftware_usersCreationAttributes } from "./multisoftware_users";
import { nsProduto as _nsProduto } from "./nsProduto";
import type { nsProdutoAttributes, nsProdutoCreationAttributes } from "./nsProduto";
import { passagem as _passagem } from "./passagem";
import type { passagemAttributes, passagemCreationAttributes } from "./passagem";
import { pesoModelo as _pesoModelo } from "./pesoModelo";
import type { pesoModeloAttributes, pesoModeloCreationAttributes } from "./pesoModelo";
import { posto as _posto } from "./posto";
import type { postoAttributes, postoCreationAttributes } from "./posto";
import { shopfloorNotebookDiskInfo as _shopfloorNotebookDiskInfo } from "./shopfloorNotebookDiskInfo";
import type { shopfloorNotebookDiskInfoAttributes, shopfloorNotebookDiskInfoCreationAttributes } from "./shopfloorNotebookDiskInfo";
import { shopfloorNotebookMemoryInfo as _shopfloorNotebookMemoryInfo } from "./shopfloorNotebookMemoryInfo";
import type { shopfloorNotebookMemoryInfoAttributes, shopfloorNotebookMemoryInfoCreationAttributes } from "./shopfloorNotebookMemoryInfo";
import { shopfloorNotebookStatus as _shopfloorNotebookStatus } from "./shopfloorNotebookStatus";
import type { shopfloorNotebookStatusAttributes, shopfloorNotebookStatusCreationAttributes } from "./shopfloorNotebookStatus";
import { softwareVersions as _softwareVersions } from "./softwareVersions";
import type { softwareVersionsAttributes, softwareVersionsCreationAttributes } from "./softwareVersions";
import { specModelo as _specModelo } from "./specModelo";
import type { specModeloAttributes, specModeloCreationAttributes } from "./specModelo";
import { teste as _teste } from "./teste";
import type { testeAttributes, testeCreationAttributes } from "./teste";

export {
  _EE_old as EE_old,
  _Plan1 as Plan1,
  _Usuario as Usuario,
  _UsuarioNivel as UsuarioNivel,
  _devolucaoChave as devolucaoChave,
  _historico as historico,
  _historico2 as historico2,
  _historicoBackup as historicoBackup,
  _historicoChromebook as historicoChromebook,
  _historicoEmbalagem as historicoEmbalagem,
  _historicoJob as historicoJob,
  _historicoRetrabalho as historicoRetrabalho,
  _historico_mac as historico_mac,
  _modelVersionWindows as modelVersionWindows,
  _modelo as modelo,
  _modeloChave as modeloChave,
  _modeloChaveConfig as modeloChaveConfig,
  _modeloCheckSD as modeloCheckSD,
  _modeloCheckSecureBoot as modeloCheckSecureBoot,
  _modeloDesktop as modeloDesktop,
  _modeloImage as modeloImage,
  _modeloImageStatus as modeloImageStatus,
  _modeloLinhaStatus as modeloLinhaStatus,
  _modeloMemorySPDStatus as modeloMemorySPDStatus,
  _modeloResolucaoStatus as modeloResolucaoStatus,
  _modeloRetrabalho as modeloRetrabalho,
  _modeloSistemaOperacional as modeloSistemaOperacional,
  _modeloSmbiosStatus as modeloSmbiosStatus,
  _modeloSystemInfoStatus as modeloSystemInfoStatus,
  _modeloSystemInfo_old as modeloSystemInfo_old,
  _modeloTeste as modeloTeste,
  _modeloVersionWindowsStatus as modeloVersionWindowsStatus,
  _multisoftware_users as multisoftware_users,
  _nsProduto as nsProduto,
  _passagem as passagem,
  _pesoModelo as pesoModelo,
  _posto as posto,
  _shopfloorNotebookDiskInfo as shopfloorNotebookDiskInfo,
  _shopfloorNotebookMemoryInfo as shopfloorNotebookMemoryInfo,
  _shopfloorNotebookStatus as shopfloorNotebookStatus,
  _softwareVersions as softwareVersions,
  _specModelo as specModelo,
  _teste as teste,
};

export type {
  EE_oldAttributes,
  EE_oldCreationAttributes,
  Plan1Attributes,
  Plan1CreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
  UsuarioNivelAttributes,
  UsuarioNivelCreationAttributes,
  devolucaoChaveAttributes,
  devolucaoChaveCreationAttributes,
  historicoAttributes,
  historicoCreationAttributes,
  historico2Attributes,
  historico2CreationAttributes,
  historicoBackupAttributes,
  historicoBackupCreationAttributes,
  historicoChromebookAttributes,
  historicoChromebookCreationAttributes,
  historicoEmbalagemAttributes,
  historicoEmbalagemCreationAttributes,
  historicoJobAttributes,
  historicoJobCreationAttributes,
  historicoRetrabalhoAttributes,
  historicoRetrabalhoCreationAttributes,
  historico_macAttributes,
  historico_macCreationAttributes,
  modelVersionWindowsAttributes,
  modelVersionWindowsCreationAttributes,
  modeloAttributes,
  modeloCreationAttributes,
  modeloChaveAttributes,
  modeloChaveCreationAttributes,
  modeloChaveConfigAttributes,
  modeloChaveConfigCreationAttributes,
  modeloCheckSDAttributes,
  modeloCheckSDCreationAttributes,
  modeloCheckSecureBootAttributes,
  modeloCheckSecureBootCreationAttributes,
  modeloDesktopAttributes,
  modeloDesktopCreationAttributes,
  modeloImageAttributes,
  modeloImageCreationAttributes,
  modeloImageStatusAttributes,
  modeloImageStatusCreationAttributes,
  modeloLinhaStatusAttributes,
  modeloLinhaStatusCreationAttributes,
  modeloMemorySPDStatusAttributes,
  modeloMemorySPDStatusCreationAttributes,
  modeloResolucaoStatusAttributes,
  modeloResolucaoStatusCreationAttributes,
  modeloRetrabalhoAttributes,
  modeloRetrabalhoCreationAttributes,
  modeloSistemaOperacionalAttributes,
  modeloSistemaOperacionalCreationAttributes,
  modeloSmbiosStatusAttributes,
  modeloSmbiosStatusCreationAttributes,
  modeloSystemInfoStatusAttributes,
  modeloSystemInfoStatusCreationAttributes,
  modeloSystemInfo_oldAttributes,
  modeloSystemInfo_oldCreationAttributes,
  modeloTesteAttributes,
  modeloTesteCreationAttributes,
  modeloVersionWindowsStatusAttributes,
  modeloVersionWindowsStatusCreationAttributes,
  multisoftware_usersAttributes,
  multisoftware_usersCreationAttributes,
  nsProdutoAttributes,
  nsProdutoCreationAttributes,
  passagemAttributes,
  passagemCreationAttributes,
  pesoModeloAttributes,
  pesoModeloCreationAttributes,
  postoAttributes,
  postoCreationAttributes,
  shopfloorNotebookDiskInfoAttributes,
  shopfloorNotebookDiskInfoCreationAttributes,
  shopfloorNotebookMemoryInfoAttributes,
  shopfloorNotebookMemoryInfoCreationAttributes,
  shopfloorNotebookStatusAttributes,
  shopfloorNotebookStatusCreationAttributes,
  softwareVersionsAttributes,
  softwareVersionsCreationAttributes,
  specModeloAttributes,
  specModeloCreationAttributes,
  testeAttributes,
  testeCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const EE_old = _EE_old.initModel(sequelize);
  const Plan1 = _Plan1.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);
  const UsuarioNivel = _UsuarioNivel.initModel(sequelize);
  const devolucaoChave = _devolucaoChave.initModel(sequelize);
  const historico = _historico.initModel(sequelize);
  const historico2 = _historico2.initModel(sequelize);
  const historicoBackup = _historicoBackup.initModel(sequelize);
  const historicoChromebook = _historicoChromebook.initModel(sequelize);
  const historicoEmbalagem = _historicoEmbalagem.initModel(sequelize);
  const historicoJob = _historicoJob.initModel(sequelize);
  const historicoRetrabalho = _historicoRetrabalho.initModel(sequelize);
  const historico_mac = _historico_mac.initModel(sequelize);
  const modelVersionWindows = _modelVersionWindows.initModel(sequelize);
  const modelo = _modelo.initModel(sequelize);
  const modeloChave = _modeloChave.initModel(sequelize);
  const modeloChaveConfig = _modeloChaveConfig.initModel(sequelize);
  const modeloCheckSD = _modeloCheckSD.initModel(sequelize);
  const modeloCheckSecureBoot = _modeloCheckSecureBoot.initModel(sequelize);
  const modeloDesktop = _modeloDesktop.initModel(sequelize);
  const modeloImage = _modeloImage.initModel(sequelize);
  const modeloImageStatus = _modeloImageStatus.initModel(sequelize);
  const modeloLinhaStatus = _modeloLinhaStatus.initModel(sequelize);
  const modeloMemorySPDStatus = _modeloMemorySPDStatus.initModel(sequelize);
  const modeloResolucaoStatus = _modeloResolucaoStatus.initModel(sequelize);
  const modeloRetrabalho = _modeloRetrabalho.initModel(sequelize);
  const modeloSistemaOperacional = _modeloSistemaOperacional.initModel(sequelize);
  const modeloSmbiosStatus = _modeloSmbiosStatus.initModel(sequelize);
  const modeloSystemInfoStatus = _modeloSystemInfoStatus.initModel(sequelize);
  const modeloSystemInfo_old = _modeloSystemInfo_old.initModel(sequelize);
  const modeloTeste = _modeloTeste.initModel(sequelize);
  const modeloVersionWindowsStatus = _modeloVersionWindowsStatus.initModel(sequelize);
  const multisoftware_users = _multisoftware_users.initModel(sequelize);
  const nsProduto = _nsProduto.initModel(sequelize);
  const passagem = _passagem.initModel(sequelize);
  const pesoModelo = _pesoModelo.initModel(sequelize);
  const posto = _posto.initModel(sequelize);
  const shopfloorNotebookDiskInfo = _shopfloorNotebookDiskInfo.initModel(sequelize);
  const shopfloorNotebookMemoryInfo = _shopfloorNotebookMemoryInfo.initModel(sequelize);
  const shopfloorNotebookStatus = _shopfloorNotebookStatus.initModel(sequelize);
  const softwareVersions = _softwareVersions.initModel(sequelize);
  const specModelo = _specModelo.initModel(sequelize);
  const teste = _teste.initModel(sequelize);

  Usuario.belongsTo(UsuarioNivel, { as: "nivel_UsuarioNivel", foreignKey: "nivel"});
  UsuarioNivel.hasMany(Usuario, { as: "Usuarios", foreignKey: "nivel"});
  modeloImage.belongsTo(modeloImageStatus, { as: "idImage_modeloImageStatus", foreignKey: "idImage"});
  modeloImageStatus.hasMany(modeloImage, { as: "modeloImages", foreignKey: "idImage"});
  shopfloorNotebookDiskInfo.belongsTo(shopfloorNotebookStatus, { as: "idShopfloorNotebook_shopfloorNotebookStatus", foreignKey: "idShopfloorNotebook"});
  shopfloorNotebookStatus.hasMany(shopfloorNotebookDiskInfo, { as: "shopfloorNotebookDiskInfos", foreignKey: "idShopfloorNotebook"});
  shopfloorNotebookMemoryInfo.belongsTo(shopfloorNotebookStatus, { as: "idShopfloorNotebook_shopfloorNotebookStatus", foreignKey: "idShopfloorNotebook"});
  shopfloorNotebookStatus.hasMany(shopfloorNotebookMemoryInfo, { as: "shopfloorNotebookMemoryInfos", foreignKey: "idShopfloorNotebook"});

  return {
    EE_old: EE_old,
    Plan1: Plan1,
    Usuario: Usuario,
    UsuarioNivel: UsuarioNivel,
    devolucaoChave: devolucaoChave,
    historico: historico,
    historico2: historico2,
    historicoBackup: historicoBackup,
    historicoChromebook: historicoChromebook,
    historicoEmbalagem: historicoEmbalagem,
    historicoJob: historicoJob,
    historicoRetrabalho: historicoRetrabalho,
    historico_mac: historico_mac,
    modelVersionWindows: modelVersionWindows,
    modelo: modelo,
    modeloChave: modeloChave,
    modeloChaveConfig: modeloChaveConfig,
    modeloCheckSD: modeloCheckSD,
    modeloCheckSecureBoot: modeloCheckSecureBoot,
    modeloDesktop: modeloDesktop,
    modeloImage: modeloImage,
    modeloImageStatus: modeloImageStatus,
    modeloLinhaStatus: modeloLinhaStatus,
    modeloMemorySPDStatus: modeloMemorySPDStatus,
    modeloResolucaoStatus: modeloResolucaoStatus,
    modeloRetrabalho: modeloRetrabalho,
    modeloSistemaOperacional: modeloSistemaOperacional,
    modeloSmbiosStatus: modeloSmbiosStatus,
    modeloSystemInfoStatus: modeloSystemInfoStatus,
    modeloSystemInfo_old: modeloSystemInfo_old,
    modeloTeste: modeloTeste,
    modeloVersionWindowsStatus: modeloVersionWindowsStatus,
    multisoftware_users: multisoftware_users,
    nsProduto: nsProduto,
    passagem: passagem,
    pesoModelo: pesoModelo,
    posto: posto,
    shopfloorNotebookDiskInfo: shopfloorNotebookDiskInfo,
    shopfloorNotebookMemoryInfo: shopfloorNotebookMemoryInfo,
    shopfloorNotebookStatus: shopfloorNotebookStatus,
    softwareVersions: softwareVersions,
    specModelo: specModelo,
    teste: teste,
  };
}
